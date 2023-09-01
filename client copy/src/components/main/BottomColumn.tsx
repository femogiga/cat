type BottomColumnProps = {
    children?: React.ReactNode
}

const BottomColumn = ({ children }: BottomColumnProps) => {

    const botttomStyle:React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
         width: '100%',
        columnGap: '2rem',
        rowGap:'2rem',
        // marginInline: 'auto',
        flexWrap: 'wrap',
        backgroundColor: 'initial',
        paddingInlineStart: '5rem'

    }
    return (
        <div className="bottomColumn flow-3" style={botttomStyle}>
            {children}
        </div>
    )
}


export default BottomColumn
