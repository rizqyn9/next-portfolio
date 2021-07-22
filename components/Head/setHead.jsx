import Head from 'next/head'

const Title = (props) => {
    const {children} = props
    return (
        <div>

        <Head>
            <title>{children}</title>
        </Head>
        </div>
    )
}

export default Title