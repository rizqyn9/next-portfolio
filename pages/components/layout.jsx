
import Nav from '../../components/nav/Nav'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Nav/>
            {children}
        </div>
    )
}

export default Layout