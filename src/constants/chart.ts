/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const dataLine = [
  {
    key: "first",
    dataLineChart: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          borderColor: "#007BFF",
          backgroundColor: "rgba(0, 123, 255, 1)",
          borderWidth: 2,
          fill: true,
          data: [40, 39, 20, 40, 39, 80, 40],
          tension: 0.5,
        },
      ],
    },
    dataInfoLineChart: {
      id: 1,
      title: "Totel revenue",
      info: "3,564",
    },
    backgroundColor: "teal",
  },
  {
    key: "second",
    dataLineChart: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          borderColor: "#007BFF",
          backgroundColor: "rgba(0, 123, 255, 1)",
          borderWidth: 2,
          fill: true,
          data: [45, 29, 20, 35, 45, 80, 30],
          tension: 0.5,
        },
      ],
    },
    dataInfoLineChart: {
      id: 2,
      title: "Products sold",
      info: "564",
    },
    backgroundColor: "orange",
  },
  {
    key: "third",
    dataLineChart: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          borderColor: "#007BFF",
          backgroundColor: "rgba(0, 123, 255, 1)",
          borderWidth: 2,
          fill: true,
          data: [49, 39, 22, 45, 39, 80, 30],
          tension: 0.5,
        },
      ],
    },
    dataInfoLineChart: {
      id: 3,
      title: "Growth",
      info: "+5.0%",
    },
    backgroundColor: "red",
  },
];

export const optionsLine = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 1,
      bottom: 1,
      left: 1,
      right: 1,
    },
  },
  scales: {
    x: {
      display: false,
      grid: {
        display: false,
      },
      title: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    y: {
      display: false,
      beginAtZero: true,
      grid: {
        display: false,
      },
      title: {
        display: false,
      },
      ticks: {
        display: true,
        stepSize: 2,
        padding: 0,
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const dataBar = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Data One",
      backgroundColor: "blue",
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: "Data Two",
      backgroundColor: "red",
      data: [10, 25, 15, 30, 20, 5, 15, 25, 30, 10, 5, 20],
    },
    {
      label: "Data Three",
      backgroundColor: "yellow",
      data: [30, 15, 25, 10, 30, 20, 10, 15, 20, 30, 15, 10],
    },
  ],
};

export const optionsBar = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true,
      grid: {
        display: false,
      },
      title: {
        display: true,
      },
      ticks: {
        display: true,
      },
    },
    y: {
      display: true,
      beginAtZero: true,
      grid: {
        display: true,
      },
      title: {
        display: true,
      },
      ticks: {
        display: true,
        stepSize: 10,
        padding: 0,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

export const dataPie = {
  labels: ["MainData", "RestData"],
  datasets: [
    {
      backgroundColor: ["blue", "#F4F4F4"],
      data: [100, 20],
    },
    {
      backgroundColor: ["orange", "#F4F4F4"],
      data: [60, 20],
    },
    {
      backgroundColor: ["green", "#F4F4F4"],
      data: [30, 20],
    },
    {
      backgroundColor: ["red", "#F4F4F4"],
      data: [10, 20],
    },
  ],
};

export const optionsPie = {
  responsive: true,
  maintainAspectRatio: false,
  cutoutPercentage: 50,
  plugins: {
    legend: {
      display: false,
    },
  },
};
