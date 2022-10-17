import PositionSymbol from 'components/PositionSymbol';
import { ODDS_COLOR, STATUS_COLOR } from 'constants/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { convertFinalResultToResultType, formatMarketOdds, isDiscounted } from 'utils/markets';
import { Status } from '../MatchStatus/MatchStatus';
import { Container, OddsContainer, WinnerLabel } from './styled-components';
import { AccountPosition, PositionType } from '../../../../../../types/markets';
import { useSelector } from 'react-redux';
import { getOddsType } from '../../../../../../redux/modules/ui';

type OddsProps = {
    isResolved?: boolean;
    finalResult?: number;
    isLive?: boolean;
    isCancelled?: boolean;
    odds?: {
        homeOdds: number;
        awayOdds: number;
        drawOdds?: number;
    };
    accountPositions?: AccountPosition[];
    isPaused: boolean;
    isApexTopGame: boolean;
    shortPriceImpact: number;
    longPriceImpact: number;
};

const Odds: React.FC<OddsProps> = ({
    isResolved,
    finalResult,
    isLive,
    isCancelled,
    odds,
    accountPositions,
    isPaused,
    isApexTopGame,
    shortPriceImpact,
    longPriceImpact,
}) => {
    const { t } = useTranslation();

    const pendingResolution =
        odds?.awayOdds == 0 && odds?.homeOdds == 0 && odds?.awayOdds == 0 && isLive && !isResolved;
    const noOddsFlag =
        odds?.awayOdds == 0 &&
        odds?.homeOdds == 0 &&
        odds?.awayOdds == 0 &&
        !isLive &&
        !isResolved &&
        !isCancelled &&
        !isPaused;
    const resolvedGameFlag = isResolved && finalResult;
    const showOdds = !pendingResolution && !noOddsFlag && !resolvedGameFlag && !isCancelled && !isPaused;
    const selectedOddsType = useSelector(getOddsType);

    return (
        <Container>
            {noOddsFlag && <Status color={STATUS_COLOR.COMING_SOON}>{t('markets.market-card.coming-soon')}</Status>}
            {resolvedGameFlag && (
                <>
                    <PositionSymbol type={convertFinalResultToResultType(finalResult, isApexTopGame)} />
                    <WinnerLabel>{t('common.winner')}</WinnerLabel>
                </>
            )}
            {showOdds && (
                <OddsContainer>
                    <PositionSymbol
                        type={isApexTopGame ? 3 : 0}
                        symbolColor={ODDS_COLOR.HOME}
                        additionalText={{
                            firstText: formatMarketOdds(selectedOddsType, odds?.homeOdds),
                            firstTextStyle: { fontSize: '19px', color: ODDS_COLOR.HOME, marginLeft: '10px' },
                        }}
                        showTooltip={odds?.homeOdds == 0}
                        glow={
                            accountPositions &&
                            !!accountPositions.find((pos) => pos.amount && pos.side === PositionType.home)
                        }
                        // long === HOME
                        discount={isDiscounted(longPriceImpact) ? longPriceImpact : undefined}
                    />
                    {odds?.drawOdds !== 0 && (
                        <PositionSymbol
                            type={2}
                            symbolColor={ODDS_COLOR.DRAW}
                            additionalText={{
                                firstText: formatMarketOdds(selectedOddsType, odds?.drawOdds),
                                firstTextStyle: { fontSize: '19px', color: ODDS_COLOR.DRAW, marginLeft: '10px' },
                            }}
                            glow={
                                accountPositions &&
                                !!accountPositions.find((pos) => pos.amount && pos.side === PositionType.draw)
                            }
                        />
                    )}
                    <PositionSymbol
                        type={isApexTopGame ? 4 : 1}
                        symbolColor={ODDS_COLOR.AWAY}
                        additionalText={{
                            firstText: formatMarketOdds(selectedOddsType, odds?.awayOdds),
                            firstTextStyle: { fontSize: '19px', color: ODDS_COLOR.AWAY, marginLeft: '10px' },
                        }}
                        showTooltip={odds?.awayOdds == 0}
                        glow={
                            accountPositions &&
                            !!accountPositions.find((pos) => pos.amount && pos.side === PositionType.away)
                        }
                        // short === AWAY
                        discount={isDiscounted(shortPriceImpact) ? shortPriceImpact : undefined}
                    />
                </OddsContainer>
            )}
        </Container>
    );
};

export default Odds;
