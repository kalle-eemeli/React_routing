import './../App.css';
import gitLogo from './../images/github.svg'
import mysqlLogo from './../images/mysql-logo.svg'

function BottomBar() {
    return(
        <div className="BottomBar">
            <img src={gitLogo} alt="GitHub"/>
            <a href="https://dev.mysql.com/doc/employee/en/employees-introduction.html" target="_blank">
                <img src={mysqlLogo} alt="MySQL"/>
            </a>
        </div>
    )
}

export default BottomBar;