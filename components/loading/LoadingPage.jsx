import Router from 'next/router'
// import {Loading} from '../../hooks/LoadingHook'

const LoadingPage = () => {

    return (
        <div className="wrap" id="loading">
            <div className="bg">
                <div className="loading">
                <span className="title">loading</span>
                <span className="text">R-Dev</span>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage;