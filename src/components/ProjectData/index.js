import BudgetTracker from '../../images/projects/BudgetTracker.png';
import CodeQuiz from '../../images/projects/CodeQuiz.png';
import EmployeeDirectory from '../../images/projects/EmployeeDirectory.png';
import FFS from '../../images/projects/FFS.png';
import PasswordGen from '../../images/projects/PasswordGen.png';

const portfolio = [
    {
        id: 1,
        title: 'Budget Tracker PWA',
        description: 'A simple PWA that helps users track their spending.',
        image: BudgetTracker,
        repository: 'https://github.com/MyDryDay/UoB_BC_Budget_Tracker',
        URL: 'https://budget-tracking-pwa-app.herokuapp.com/'
    },
    {
        id: 2,
        title: 'Coding Quiz',
        description: 'A quiz focusing on web technologies that has a timer and hiscores board.',
        image: CodeQuiz,
        repository: 'https://github.com/MyDryDay/UoB_BC_Code_Quiz',
        URL: 'https://mydryday.github.io/UoB_BC_Code_Quiz/'
    },
    {
        id: 3,
        title: 'React Employee Directory',
        description: 'A react application used to display specific data from a list of randomly generated employees. Users are able to search the list by name, or sort the columns in ascending/descending order.',
        image: EmployeeDirectory,
        repository: 'https://github.com/MyDryDay/UoB_BC_React_Employee_Directory',
        URL: 'https://mydryday.github.io/UoB_BC_React_Employee_Directory/'
    },
    {
        id: 4,
        title: 'Few Fries Short',
        description: 'A collaboratively made review website, that enables users to make accounts, post/edit/delete reviews, comment on other reviews & add restaurants that don\'t have any reviews associated with them.',
        image: FFS,
        repository: 'https://github.com/MyDryDay/Few-Fries-Short',
        URL: 'https://few-fries-short.herokuapp.com/'
    },
    {
        id: 5,
        title: 'Password Generator',
        description: 'A basic website that allows users to generate a password of varying length with different character sets.',
        image: PasswordGen,
        repository: 'https://github.com/MyDryDay/UoB_BC_Password_Generator',
        URL: 'https://mydryday.github.io/UoB_BC_Password_Generator'
    }
]

export default portfolio;