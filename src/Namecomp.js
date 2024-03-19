export function Namecomp({ classid, datacont, clink = "", paddy = "" }) {
    return (
        <>
            <a href={clink} target="_blank" rel="noreferrer" className={classid}>
                <div className={paddy}>
                    <span>{datacont}</span>
                </div>
            </a>
        </>
    )
}