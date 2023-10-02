import { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import LanguageSelection from '../../components/LanguageSelection';
import Logo from '../../assets/images/logolightnet.png';
import ButtonPrimary from '../../components/button/ButtonPrimary';
import { Input } from 'antd';

const Login = () => {
    const { t } = useTranslation();
    const [clientIp, setClientIp] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accessCode, setAccessCode] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleLogin = () => {
        console.log('finish')
    }

    // useEffect to fetch client IP
    useEffect(() => {
        axios.get('https://api.ipify.org?format=json')
            .then((response) => {
                setClientIp(response.data.ip);
            })
            .catch((error) => {
                console.error('Error fetching IP address:', error);
            });
    }, []);

    // useEffect to check if input fields have values
    useEffect(() => {
        if (username && password && accessCode) {
            setIsButtonDisabled(false);
        } else {
            setIsButtonDisabled(true);
        }
    }, [username, password, accessCode]);

    return (
        <div className="w-[100vw] min-h-[100vh] overflow-x-hidden bg-bgprimary bgImage">
            <div className='fixed top-4 right-4'>
                <LanguageSelection />
            </div>
            <div className='min-h-[100vh] flex items-center relative 2xl:left-[1100px] xl:left-[660px] left-0 xl:justify-start justify-center'>
                <div className='flex bgBlur md:w-[576px] py-[50px] px-[62px] flex-col justify-center items-center'>
                    <div>
                        <img src={Logo} className='w-[100px] h-[92px]' alt="" />
                    </div>
                    <div className='py-[40px] text-center'>
                        <h3 className='text-white font-bold uppercase text-3xl'>agent panel log in</h3>
                        <p className='text-fontsecondary font-normal text-lg pt-[20px]'>{t('loginpage.connectfrom')} {clientIp}</p>
                    </div>
                    <div className='w-full flex flex-col space-y-[30px] text-white'>
                        <div className='flex flex-col space-y-[10px]'>
                            <label className='text-bold'>Username</label>
                            <input
                                className='h-[56px] border-2 border-bgpopup bg-glassy rounded-[20px] py-2 px-4 outline-none focus:border-ci'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col space-y-[10px]'>
                            <label className='text-bold'>Password</label>
                            <Input.Password
                                style={{ height: 56, borderRadius: 20 }}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col space-y-[10px]'>
                            <label className='text-bold'>Access code</label>
                            <input
                                className='h-[56px] border-2 border-bgpopup bg-glassy rounded-[20px] py-2 px-4 outline-none focus:border-ci'
                                value={accessCode}
                                onChange={(e) => setAccessCode(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='w-full pt-[40px]'>
                        <ButtonPrimary
                            title={t('loginpage.login')}
                            onClick={handleLogin}
                            disabled={isButtonDisabled}
                        />
                    </div>
                    <p className='text-white font-normal underline pt-[40px]'>Forgot Password ?</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
