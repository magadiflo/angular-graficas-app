import { Component, OnInit } from '@angular/core';

import { Label } from 'ng2-charts';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
    `.chart-container {
      display: block;
    }`
  ]
})
export class GraficaBarraComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2020', '2021', '2022', '2023', '2024', '2025', '2026'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#46E374', hoverBackgroundColor: 'blue' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#E34674', hoverBackgroundColor: '#7446E3' },
    { data: [8, 38, 70, 59, 66, 80, 100], label: 'Series C', backgroundColor: '#7446E3', hoverBackgroundColor: 'red' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
