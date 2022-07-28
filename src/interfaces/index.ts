export interface IJobOpportunity {
  job: string;
  type: string;
  salary: number;
}

export interface IJobPost {
  occupation: string;
  opportunities: IJobOpportunity[];
}

export interface IMenuItem {
  path: string;
  title: string;
}

export interface IMetricItem {
  count: number;
  description: string;
  title: string;
}
