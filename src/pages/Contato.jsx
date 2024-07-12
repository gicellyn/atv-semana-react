import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Contato() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function feedback(data) {
        console.log(data);
    }

    return (
        <main>
            <form className="form-section mt-5" onSubmit={handleSubmit(feedback)}>
                <h3 className="text-center">Houve algum problema? Entre em contato.</h3>
                <hr />
                <div>
                    <label htmlFor="name">Nome</label>
                    <input type="text" id="name" className="form-control" maxLength={100} {...register("name", { required: true })} />
                    {errors.name && <small className="text-danger">Este campo é obrigatório!</small>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" {...register("email", { required: true })} />
                    {errors.email && <small className="text-danger">Este campo é obrigatório!</small>}
                </div>
                <div>
                    <label htmlFor="feedback">Descreva seu problema:</label>
                    <textarea id="feedback" className="form-control" {...register("feedback", { required: true })}></textarea>
                    {errors.feedback && <small className="text-danger">Este campo é obrigatório!</small>}
                </div>
                <Button variant="dark" className="w-100 mt-1" type="submit">Enviar</Button>
            </form>
        </main>
    );
}

export default Contato;