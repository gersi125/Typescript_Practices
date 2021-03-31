// Generic Utility Types
interface CourseGoal{
    title: string;
    desc: string;
    completeUntil: Date;
}

function createCourseGoal(title: string, desc: string, date: Date) {
    let courseGoal: Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.desc = desc;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
    }

const names: Readonly<String[]>= ['Gersi', 'Kana'];
//names.push('Ili');
