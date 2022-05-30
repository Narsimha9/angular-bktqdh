import { Component, ViewChild } from '@angular/core';
import { PopupComponent } from './popup/popup.component';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexFill,
  ApexLegend,
} from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/table';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  fill: ApexFill;
  legend: ApexLegend;
  xaxis: ApexXAxis;
  // yaxis: ApexYAxis;
  plotOptions: ApexPlotOptions;
};

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(public dialog: MatDialog) {
    this.chartOptions = {
      series: [
        {
          name: 'Alexandre Yale',
          data: [
            {
              x: 'Early',
              y: [0, 1],
              company:
                'University of Ottawa \nData Scientist, Sensor Algorithms',
            },
            {
              x: 'Early',
              y: [1, 2],
              company:
                'National Research Council Canada \nResearcher, Fluid Dynamics',
            },
            {
              x: 'Early',
              y: [2, 3],
              company:
                'National Research Council Canada \nScientist, Optical Systems',
            },
            {
              x: 'Early',
              y: [3, 4],
              company: 'University of Ottawa\nPhysics/Math',
            },
            {
              x: 'Early',
              y: [3, 4],
              company: 'University of Ottawa \nTeaching Assistant',
            },
            {
              x: 'Mid',
              y: [4, 5],
              company:
                'Perimeter Institute for Theoretical Physics \nPSI Student',
            },
            {
              x: 'Mid',
              y: [4.2, 5],
              company: 'University of Waterloo\nTheoretical Physics',
            },
            {
              x: 'Mid',
              y: [5, 6],
              company:
                'Perimeter Institute for Theoretical Physics \nTeaching Assistant',
            },
            {
              x: 'Mid',
              y: [5, 7],
              company:
                'Perimeter Institute for Theoretical Physics \nGraduate Research Assistant',
            },
            {
              x: 'Mid',
              y: [6, 7],
              company: 'University of Waterloo\nTheoretical Physics',
            },
            {
              x: 'Mid',
              y: [7, 9],
              company: 'Alchemy Worx Ltd \nSenior Data Analyst',
            },
            {
              x: 'Executive',
              y: [9, 11],
              company: 'Alchemy Worx Ltd \nHead of Business Intelligence',
            },
            {
              x: 'Executive',
              y: [10, 12],
              company:
                'Touchstone Intelligent Marketing \nCo-founder and Chief Data Officer',
            },
            {
              x: 'Executive',
              y: [10, 13],
              company:
                'Alchemy Worx Ltd \nInsight Director - Marketing and Advertising',
            },
          ],
        },
        {
          name: 'Chenfeng Bao',
          data: [
            {
              x: 'Early',
              y: [0, 1],
              company: 'Zhejiang University \nNatural Science',
            },
            {
              x: 'Early',
              y: [1, 2],
              company: 'University of California \nPhysics',
            },
            {
              x: 'Early',
              y: [1, 3],
              company: 'The University of Hong Kong (HKU)\nResearch Assistant',
            },
            {
              x: 'Early',
              y: [2, 3],
              company:
                'University of California - Los Angeles (UCLA)\nExchange Student',
            },
            {
              x: 'Early',
              y: [2.5, 3],
              company: 'The University of Hong Kong Mathematics Physics',
            },
            {
              x: 'Mid',
              y: [3, 4],
              company:
                'Perimeter Institute for Theoretical Physics PSI Student',
            },
            {
              x: 'Mid',
              y: [4, 7],
              company:
                'University of Waterloo - Department of Physics and Astronomy\nPhD Graduate Student',
            },
            {
              x: 'Mid',
              y: [5, 7],
              company:
                'Perimeter Institute for Theoretical Physics\nResident PhD Student',
            },
            {
              x: 'Mid',
              y: [5.3, 7],
              company:
                'The Chinese University of Hong Kong\nResearch Assistant',
            },
            {
              x: 'Executive',
              y: [7, 8],
              company: 'University of Waterloo \nPhysics',
            },
            {
              x: 'Executive',
              y: [8, 10],
              company: 'D2L Desire2Learn\nSoftware Developer',
            },
            {
              x: 'Executive',
              y: [10, 12],
              company: 'D2L Desire2Learn\nSenior Software Developer',
            },
          ],
        },
        {
          name: 'Gunjan Lakhlani',
          data: [
            {
              x: 'Early',
              y: [0, 3],
              company: 'St. Xaviers College Undergraduate Physics Student',
            },
            {
              x: 'Early',
              y: [3, 4],
              company:
                'Perimeter Institute for Theoretical Physics \nPSI Student',
            },
            {
              x: 'Early',
              y: [4, 5],
              company:
                'University of Waterloo - Department of Physics and Astronomy \nMasters Physics Student',
            },
            {
              x: 'Early',
              y: [4.1, 5],
              company: 'University of Waterloo \nTeaching Assistant',
            },
            {
              x: 'Mid',
              y: [5, 6],
              company:
                'King Abdullah University of Science and Technology \nTutor for Saudi Research Science Institute',
            },
            {
              x: 'Mid',
              y: [6, 10],
              company:
                'University of Toronto - Department of Physics \nPhD Student and Teaching Assistant (TA)',
            },
            {
              x: 'Mid',
              y: [9, 10],
              company: 'University of Toronto \nPhysics',
            },
            {
              x: 'Executive',
              y: [10, 12],
              company:
                'Royal Bank of Canada (SEE RBC Financial Group) \nMachine Learning Researcher/Data Scientist',
            },
            {
              x: 'Executive',
              y: [12, 13],
              company:
                'Royal Bank of Canada (SEE RBC Financial Group) \nManager in Balance Sheet Risk',
            },
            {
              x: 'Executive',
              y: [13, 14],
              company:
                'BMO Financial Group \nQuantitative Researcher (Corporate Treasury)',
            },
          ],
        },
        {
          name: 'Ke Cai',
          data: [
            {
              x: 'Early',
              y: [0, 4],
              company: 'Bard College \nUndergraduate Student',
            },
            {
              x: 'Early',
              y: [3, 5],
              company: 'Bard College \nUndergraduate Student',
            },
            {
              x: 'Early',
              y: [5, 6],
              company:
                'University of Waterloo \nTheoretical and Mathematical Physics',
            },
            {
              x: 'Mid',
              y: [6, 7],
              company: 'University of Toronto \nResearch Assistant',
            },
            {
              x: 'Executive',
              y: [7, 8],
              company: 'Scotiabank \nEnterprise Stress Testing',
            },
            {
              x: 'Executive',
              y: [7, 8],
              company:
                'Scotiabank \nManager, Quantitative Analytics and Methodology',
            },
            {
              x: 'Executive',
              y: [8, 9],
              company: 'Scotiabank \nEnterprise Stress Testing',
            },
          ],
        },
        {
          name: 'Kyle Tate',
          data: [
            {
              x: 'Early',
              y: [0, 4],
              company: 'University of Victoria \nStudent',
            },
            {
              x: 'Early',
              y: [3, 4],
              company: 'University of Victoria \nPhysics',
            },
            {
              x: 'Early',
              y: [4, 5],
              company:
                'Perimeter Institute for Theoretical Physics \nPSI Student',
            },
            {
              x: 'Early',
              y: [4.2, 5.2],
              company: 'University of Waterloo \nTheoretical Physic',
            },
            {
              x: 'Early',
              y: [5, 8],
              company:
                'Victoria University of Wellington - School of Mathematics and Statistics \nPhD Student',
            },
            {
              x: 'Mid',
              y: [8, 8.4],
              company:
                'Perimeter Institute for Theoretical Physics \nVisiting Graduate Fellow',
            },
            {
              x: 'Mid',
              y: [8, 9],
              company: 'Victoria University of Wellington \nResearcher',
            },
            {
              x: 'Mid',
              y: [9, 12],
              company: 'BC NDP \nStatistical Analyst/ Data Modeler',
            },
            {
              x: 'Mid',
              y: [11, 12],
              company: 'Green Party of Canada \nFundraising Coordinator',
            },
            {
              x: 'Mid',
              y: [12, 13],
              company: 'Green Party of Canada \nDigital Director',
            },
            {
              x: 'Executive',
              y: [13, 14],
              company: 'Shopify \nBusiness Intelligence Developer',
            },
            {
              x: 'Executive',
              y: [14, 16],
              company: 'Shopify \nSenior Data Engineer',
            },
            {
              x: 'Executive',
              y: [16, 17],
              company: 'Shopify \nData Science Lead',
            },
            {
              x: 'Executive',
              y: [17, 18],
              company: 'Shopify \nSenior Data Science Lead',
            },
          ],
        },
      ],
      chart: {
        height: 600,
        type: 'rangeBar',
        events: {
          click: (event: any, chartContext: any, config: any) => {
            let conf = config.config;
            console.log('config.series::', conf.series[config.seriesIndex]);
            this.openDialog(conf.series[config.seriesIndex]);
            // this.showModel(conf.series[config.seriesIndex]);
          },
        },
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%',
          borderRadius: 6,
        },
      },

      xaxis: {
        type: 'category',
        categories: ['Executive', 'Mid', 'Early'],
        tickAmount: 20,
        tickPlacement: 'between',
        min: 0,
        max: 20,
        floating: false,
        tooltip: {
          enabled: true,
          formatter: undefined,
          offsetY: 0,
        },
        title: {
          text: 'Experience in years',
          offsetX: 0,
          offsetY: 20,
          style: {
            color: 'blue',
            fontSize: '18px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-xaxis-title',
          },
        },
        labels: {
          show: true,
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false,
          trim: false,
          minHeight: undefined,
          maxHeight: 120,
          style: {
            colors: [],
            fontSize: '13px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-xaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
          format: undefined,
          formatter: (value, timestamp, opts) => {
            return value;
          },
        },
      },
      tooltip: {
        custom: function (opts) {
          const company =
            opts.ctx.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
              .company;
          const level =
            opts.ctx.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
              .x;
          const experience =
            opts.ctx.w.config.series[opts.seriesIndex].data[opts.dataPointIndex]
              .y;
          const name = opts.ctx.w.config.series[opts.seriesIndex].name;

          const toolhtml =
            `<div class="tooltiphtml" style="opacity: 0.7;
          font-family: Arial, Helvetica, sans-serif; background-image: linear-gradient(yellow, red);background-color: rgba(255, 0, 0, 0.4);">` +
            '<div class="values_tool" style="padding:5px"><strong>' +
            name +
            '</strong></div>' +
            '<div class="values_tool" style="padding:5px">' +
            company +
            '</div>' +
            '<div class="values_tool" style="padding:5px">[' +
            experience +
            ']</div>' +
            '</div>';
          return toolhtml; //name+' : '+x+': '+y+': '+desc
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100],
        },
      },
      // fill: {
      //   type: 'image',
      //   image: {
      //     src: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdljNCo3t4C3S_X_RHxMZydCsdQNwME0OGBQ&usqp=CAU'],
      //     width: 30,  // optional
      //     height: 30,  //optional
      //   }
      // },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '16px',
        itemMargin: {
          horizontal: 10,
          vertical: 50,
        },
      },
    };
  }

  openDialog(datas) {
    const dialogRef = this.dialog.open(PopupComponent, { data: datas });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  // openDialogBox(data) {
  //   this.dialog.open(PopupComponent, data);
  // }
}
