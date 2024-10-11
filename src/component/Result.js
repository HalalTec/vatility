import React, { useEffect } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import res from './res.PNG'
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5radar from '@amcharts/amcharts5/radar';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
const Result = ({
    career, money, per, rel, fun, physical, spirit, health, purpose, contribution 

        }) => {

            const categories = [
                { name: 'Career and Professional Growth', values: [career[0], career[1], career[1] - career[0]] },
                { name: 'Financial Health', values: [money[0], money[1], money[1] - money[0]] },
                { name: 'Personal growth', values: [per[0], per[1], per[1] - per[0]] },
                { name: 'Relationships and Social Life', values: [rel[0], rel[1], rel[1] - rel[0]] },
                { name: 'Fun and Recreation', values: [fun[0], fun[1], fun[1] - fun[0]] },
                { name: 'Living and Work Environment', values: [physical[0], physical[1], physical[1] - physical[0]] },
                { name: 'Spirituality and Inner Growth', values: [spirit[0], spirit[1], spirit[1] - spirit[0]] },
                { name: 'Physical and Emotional Health ', values: [health[0], health[1], health[1] - health[0]] },
                { name: 'Purpose and Fulfillment ', values: [purpose[0], purpose[1], purpose[1] - purpose[0]] },
                { name: 'Contribution and Legacy ', values: [contribution[0], contribution[1], contribution[1] - contribution[0]] }


            ];

            const sortedCategories = [...categories].sort((a, b) => b.values[2] - a.values[2]);
            

            useEffect(() => {
                // Create root element
                const root = am5.Root.new('chartdiv');
        
                // Set themes
                root.setThemes([am5themes_Animated.new(root)]);
        
                // Create chart
                const chart = root.container.children.push(
                    am5radar.RadarChart.new(root, {
                        panX: false,
                        panY: false,
                        wheelX: 'panX',
                        wheelY: 'zoomX',
                    })
                );
        
                // Create axes and their renderers
                const xRenderer = am5radar.AxisRendererCircular.new(root, {});
                xRenderer.labels.template.setAll({
                    radius: 10,
                });
        
                const xAxis = chart.xAxes.push(
                    am5xy.CategoryAxis.new(root, {
                        maxDeviation: 0,
                        categoryField: 'category',
                        renderer: xRenderer,
                        tooltip: am5.Tooltip.new(root, {}),
                    })
                );
        
                const yAxis = chart.yAxes.push(
                    am5xy.ValueAxis.new(root, {
                        min: 0,
                        max: 10,
                        renderer: am5radar.AxisRendererRadial.new(root, {
                            minGridDistance: 20,
                        }),
                    })
                );
        
                yAxis.get('renderer').labels.template.set('forceHidden', true);
        
                // Create series for current satisfaction
                const currentSeries = chart.series.push(
                    am5radar.RadarColumnSeries.new(root, {
                        xAxis: xAxis,
                        yAxis: yAxis,
                        valueYField: 'currentValue',
                        categoryXField: 'category',
                    })
                );
        
                currentSeries.columns.template.setAll({
                    tooltipText: '{categoryX}: Current {currentValue}',
                    templateField: 'columnSettings',
                    strokeOpacity: 0,
                    width: am5.p100,
                });
        
                // Create series for desired satisfaction
                // const desiredSeries = chart.series.push(
                //     am5radar.RadarColumnSeries.new(root, {
                //         xAxis: xAxis,
                //         yAxis: yAxis,
                //         valueYField: 'desiredValue',
                //         categoryXField: 'category',
                //     })
                // );
        
                // desiredSeries.columns.template.setAll({
                //     tooltipText: '{categoryX}: Desired {desiredValue}',
                //     templateField: 'columnSettings',
                //     strokeOpacity: 0,
                //     width: am5.p100,
                // });
        
                // Set data
                const data = []

                sortedCategories.map((category, index) => {
                    data.push({ category: index+1, currentValue: category.values[0], columnSettings: { fill: chart.get('colors').next() } })
                })

                

       
        
                currentSeries.data.setAll(data);
                // desiredSeries.data.setAll(data);
                xAxis.data.setAll(data);
        
                // Animate chart
                currentSeries.appear(1000);
                // desiredSeries.appear(1000);
                chart.appear(1000, 100);
        
                // Cleanup function
                return () => {
                    root.dispose();
                };
            }, []);
       

           

            const save = () => {
                const input = document.getElementById('res');

                html2canvas(input).then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    const imgWidth = 190; // PDF width in mm
                    const pageHeight = pdf.internal.pageSize.height;
                    const imgHeight = (canvas.height * imgWidth) / canvas.width;
                    let heightLeft = imgHeight;
        
                    let position = 0;
        
                    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
        
                    while (heightLeft >= 0) {
                        position = heightLeft - imgHeight;
                        pdf.addPage();
                        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                        heightLeft -= pageHeight;
                    }
        
                    pdf.save('download.pdf');
                })
            }
            
    return ( 
        <>
            <div id='res'>
            <h1 style={{textAlign:"center"}}>Your Results</h1>
            <div className="result" >
                <div className="pie">
                    {/* <img src={res} alt="" srcSet="" /> */} 
                    <div id="chartdiv" className='chartdiv'></div>
                   
                </div>

                <div className="chart">
                    <table>
                        
                    <tr>
                            <th>No.</th>
                            <th>Life Domain</th>
                            <th>Now</th>
                            <th>Future</th>
                            <th>Difference</th>
                        </tr>
                        {sortedCategories.map((category, index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td style={{textAlign:"left"}}>{category.name}</td>
                            <td>{category.values[0]}</td>
                            <td>{category.values[1]}</td>
                            <td>{category.values[2]}</td>
                        </tr>
                    ))}

                    </table>
                        <button className='save'onClick={save}> Save as PDF</button>
                
                </div>
            </div>
                    
            <div className="below">
            <h3>Ready for the next step?</h3>
            <a href=''>Let's explore your personal values.</a>
            </div>
            <footer>	Made with ❤ by <a href="https://www.discoveryourvalues.com/">Discover Your Values</a></footer>
            </div>
        </>
     );
}
 
export default Result;