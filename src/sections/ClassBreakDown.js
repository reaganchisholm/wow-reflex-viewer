import React from 'react';
import { sets } from '@nivo/generators'
import { Bar } from '@nivo/bar'
import range from 'lodash/range'
import random from 'lodash/random'

export const ClassBreakDown = () => {
    const settings = {
        width: 1200,
        height: 600,
        margin: { top: 60, right: 80, bottom: 60, left: 80 },
        padding: 0.2,
        labelTextColor: 'white',
        labelSkipWidth: 16,
        labelSkipHeight: 16,
    }

    const divergingData = range(9).map(i => {
        let gain = random(0, 100)
        let loss = 100 - gain
        const highGain = random(Math.round(gain * 0.4))
        const highLoss = random(Math.round(loss * 0.4))
        gain = gain - highGain
        loss = loss - highLoss
    
        return {
            'gained > 100$': highGain,
            'gained <= 100$': gain,
            'lost <= 100$': -loss,
            'lost > 100$': -highLoss,
            user: sets.names[i],
        }
    })

    const divergingCommonProps = {
        ...settings,
        data: divergingData,
        indexBy: 'user',
        minValue: -100,
        maxValue: 100,
        enableGridX: true,
        enableGridY: false,
        label: d => Math.abs(d.value),
        axisTop: {
            tickSize: 0,
            tickPadding: 12,
        },
        axisBottom: {
            legend: 'RATING CHANGE',
            legendPosition: 'middle',
            legendOffset: 50,
            tickSize: 0,
            tickPadding: 12,
        },
        axisLeft: null,
        axisRight: { format: v => v },
    }

    const theme = {
        axis: {
            ticks: {
                text: {
                    fill:"#6B7280"
                }
            },
            legend: {
                text: {
                    fill: "#6B7280"
                }
            }
        },
    };

    return (
        <div className="mt-24"> 
            <Bar
                {...divergingCommonProps}
                theme={theme}
                keys={['gained <= 100$', 'gained > 100$', 'lost <= 100$', 'lost > 100$']}
                padding={0.4}
                layout="horizontal"
                colors={['#3B82F6', '#60A5FA', '#EF4444', '#F87171']}
            />
        </div>
    );
}