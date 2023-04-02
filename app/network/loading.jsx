import styles from './page.module.css'

function loading() {
    return (
        // <div className={loadingPage}>
        //     <div className={loadingContents}>
        //         <div className={left}>
        //             <span className={content}> </span>
        //             <span className={content}> </span>
        //             <span className={content}> </span>
        //             <span className={content}> </span>
        //         </div>
        //         <div className={right}>
        //             <div className={item}>
        //                 <span className={content}> </span>

        //             </div>
        //             <div className={item}>
        //                 <span className={content}> </span>
        //             </div>
        //             <div className={item}>
        //                 <span className={content}> </span>
        //             </div>
        //             <div className={item}>
        //                 <span className={content}> </span>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className={"loadingPage"}>
            <div className={"loadingContents"}>
                <div className={"left"}>
                    <span className={"content"}> </span>
                    <span className={"content"}> </span>
                    <span className={"content"}> </span>
                    <span className={"content"}> </span>
                </div>
                <div className={"right"}>
                    <div className={"item"}>
                        <span className={"content"}> </span>

                    </div>
                    <div className={"item"}>
                        <span className={"content"}> </span>
                    </div>
                    <div className={"item"}>
                        <span className={"content"}> </span>
                    </div>
                    <div className={"item"}>
                        <span className={"content"}> </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default loading