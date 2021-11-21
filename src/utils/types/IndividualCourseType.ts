export interface IndividualCourseType {
    id: string;
    name: string;
    teacherName: string;
    progress: number;
    calification: number;
    important: boolean;
    updates: number;
    mainColor: string;
    teacherView?: boolean
  }