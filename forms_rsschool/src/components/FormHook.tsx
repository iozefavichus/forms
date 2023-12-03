import styles from '../styles/formhook.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import userSchema from '../validation/userValidation';

import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";

interface Form {
    name: string;
    age: number;
    email: string;
    password: string;
    passwordrepeat: string;
    female: boolean;
    male: boolean;
    accept: boolean;
    country: string;
}

const FormHook = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<Form>({
        mode: 'onBlur',
        resolver: yupResolver(userSchema)
    });

    const submit: SubmitHandler<Form> = async (data) => {
        console.log(data);
        const isValid = await userSchema.isValid(data);
        console.log(isValid);
        if (isValid){
            navigate('/');
        }
    }

    return (
        <div className={styles.root}>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <div className={styles.container}>
                <div className={styles.formcontrol}>
                    <label>
                        Name:
                        <input type='text' {...register('name', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.name?.message}</p>
                </div>
                <div className={styles.formcontrol}>
                    <label>
                        Age:
                        <input type='number' {...register('age', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.age?.message}</p>
                </div>
                <div className={styles.formcontrol}>
                    <label>
                        Email:
                        <input type='text' {...register('email', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.email?.message}</p>
                </div>
                <div>
                    <label>
                        Password:
                        <input type='text' {...register('password', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.password?.message}</p>
                </div>
                <div className={styles.formcontrol}>
                <label>
                    Repeat password:
                    <input type='text' {...register('passwordrepeat', {required: true})}/>
                </label>
                    <p className={styles.errors}>{errors?.passwordrepeat?.message}</p>
                </div>

                <div className={styles.switchGender}>
                    <input type='radio' id="radio-one" value="male" {...register('male', {required: true})}/>
                    <label htmlFor="radio-one">Male</label>
                    <input type='radio' id="radio-two" value="female" {...register('female', {required: true})}/>
                    <label htmlFor="radio-two">Female</label>
                    <p className={styles.errors}>{errors?.female?.message}</p>
                </div>
                <div className={styles.formcontrol}>
                    <label>
                        Please accept term and conditions:
                    <input type='checkbox' {...register('accept', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.accept?.message}</p>
                </div>
                <div>
                    <label>
                        Country:
                        <input type='text' {...register('country', {required: true})}/>
                    </label>
                    <p className={styles.errors}>{errors?.country?.message}</p>
                </div>
                </div>
                <input type='submit' />
            </form>
        </div>
    );
  };

export default FormHook;