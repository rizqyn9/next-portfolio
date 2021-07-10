
import Nav from '../../components/nav/Nav'
import PageContainer from './page_container'

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Nav/>
            <PageContainer>
                {children}
            </PageContainer>
        </div>
    )
}

export default Layout