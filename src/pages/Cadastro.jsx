import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Cadastro() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function cadastro(data) {
        console.log(data);
    }

    return (
        <main>
            <form className="form-section mt-5" onSubmit={handleSubmit(cadastro)}>
                <h1 className="text-center">Cadastre-se</h1>
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
                    <label htmlFor="dataNascimento">Data de Nascimento</label>
                    <input type="date" id="dataNascimento" className="form-control" {...register("dataNascimento", { required: true })} />
                    {errors.dataNascimento && <small className="text-danger">Este campo é obrigatório!</small>}
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" className="form-control" {...register("password", {required:"Este campo é obrigatório!", minLength:{value:6, message:"A senha deve ter acima de 6 caracteres"}})}/>
                    {errors.password && <small className="text-danger">{errors.password.message}</small>}
                </div>
                <Button variant="dark" className="w-100 mt-1" type="submit">Cadastrar</Button>
            </form>
        </main>
    )
}

export default Cadastro;