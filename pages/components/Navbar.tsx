import React, { useCallback } from 'react';
import { useTheme } from 'next-themes';
import {
    mdiFacebook,
    mdiGoogle,
    mdiMoonWaxingCrescent,
    mdiWhiteBalanceSunny,
} from '@mdi/js';
import { Button, IconButton } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useLoginViaSocialMutation } from '@/store/slices/auth';
import { User } from '@/types';
import Icon from '@mdi/react';

interface UserDataProps {
    data: User;
}

function Navbar() {
    // theme
    const { theme, setTheme } = useTheme();
    const session = useSession() as any;
    const dispatch = useAppDispatch();
    const [loginViaSocial] = useLoginViaSocialMutation();

    const createOrLoginSocialUser = useCallback(async () => {
        const { data } = session;
        const { user } = data;
        const { email, image, name } = user;
        const body = {
            email,
            name,
            image,
        };
        const userData = (await loginViaSocial({ body })) as UserDataProps;
        const newData = {
            id: userData.data.id,
            email: userData.data.email,
            name: userData.data.name,
            image: userData.data.image,
            token: userData.data.token,
        };
        const stringifiedData = JSON.stringify(newData);
        localStorage.setItem('user', stringifiedData);
    }, [session]);

    useEffect(() => {
        if (session.status === 'authenticated') {
            createOrLoginSocialUser();
        }
    }, [session, createOrLoginSocialUser]);
    return (
        <div className="flex max-h-[10vh] basis-full items-center justify-center">
            <IconButton
                onClick={() =>
                    theme === 'dark' ? setTheme('light') : setTheme('dark')
                }
                color="primary"
                className="mr-5 bg-primary text-white dark:bg-darkprimary"
            >
                {theme === 'light' ? (
                    <Icon path={mdiMoonWaxingCrescent} size={1} />
                ) : (
                    <Icon path={mdiWhiteBalanceSunny} size={1} />
                )}
            </IconButton>
            <span>{theme} mode</span>
            <div className="ml-5 flex items-center">
                {session.status === 'unauthenticated' ? (
                    <>
                        <span className="mr-5">Login Via:</span>

                        <IconButton
                            onClick={(e) => {
                                e.preventDefault();
                                signIn('google');
                            }}
                            className="mr-2 bg-primary text-white dark:bg-darkprimary"
                        >
                            <Icon
                                path={mdiGoogle}
                                size={1}
                                className="text-green"
                            />
                        </IconButton>
                        <IconButton
                            onClick={(e) => {
                                e.preventDefault();
                                signIn('facebook');
                            }}
                            className="bg-primary text-white dark:bg-darkprimary"
                        >
                            <Icon
                                path={mdiFacebook}
                                size={1}
                                className="text-green"
                            />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <span className="mr-2">
                            {' '}
                            {session.data?.user.email}
                        </span>
                        <Button variant="contained" onClick={() => signOut()}>
                            {' '}
                            Logout
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;
