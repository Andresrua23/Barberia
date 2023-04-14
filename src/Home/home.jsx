import { Agenda } from "../Agenda/Agenda"


export function Home(){
    return(
    <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <img src="https://firebasestorage.googleapis.com/v0/b/barberiaar-2a128.appspot.com/o/barbershop.webp?alt=media&token=fa988840-5070-4e43-9636-0aaed6e2600f" alt="" className="img-fluid w-100" />
                    </div>
                    <div className="col-12 col-md-4">
                        <Agenda></Agenda>
                    </div>
                </div>
            </div>
        </section>

    </>
    )
}