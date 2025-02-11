'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

import { View } from 'lucide-react';

export default function ViewUserModal({ id }) {
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`/api/users/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            })
            .catch((error) => console.error('Error fetching user:', error));
    }, [id]);

    return (
        <Dialog>
            <DialogTrigger className="flex items-center">
                <View className="h-[18px] w-[18px] hover:text-verde" />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Información del Usuario</DialogTitle>
                    <DialogDescription>
                        Aquí puedes ver los detalles completos del usuario, incluyendo su nombre,
                        correo electrónico y otra información relevante.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        <div className="mb-[15px] flex">
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder={user.name}
                                readOnly
                                className="mr-[10px] rounded-[10px] border-0 bg-grisclaro px-[15px] text-[#8D8989]"
                            />
                            <Input
                                id="lastName"
                                name="lastName"
                                type="text"
                                readOnly
                                placeholder={user.lastName}
                                className="rounded-[10px] border-0 bg-grisclaro px-[15px] text-[#8D8989]"
                            />
                        </div>
                        <div className="mb-[15px]">
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                readOnly
                                placeholder={user.email}
                                className="rounded-[10px] border-0 bg-grisclaro px-[15px] text-[#8D8989]"
                            />
                        </div>
                        <div className="mb-[15px]">
                            <Input
                                id="phone"
                                name="phone"
                                type="text"
                                readOnly
                                placeholder={user.phone}
                                className="rounded-[10px] border-0 bg-grisclaro px-[15px] text-[#8D8989]"
                            />
                        </div>
                        <div className="mb-[15px]">
                            <Input
                                id="address"
                                name="address"
                                type="text"
                                readOnly
                                placeholder={user.address}
                                className="rounded-[10px] border-0 bg-grisclaro px-[15px] text-[#8D8989]"
                            />
                        </div>
                        <div className="mb-[15px]">
                            <Input
                                id="city"
                                name="city"
                                type="text"
                                readOnly
                                placeholder={user.city}
                                className="rounded-[10px] border-0 bg-grisclaro px-[15px] text-[#8D8989]"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 pl-[20px]">
                        <div>
                            <Image
                                src={
                                    user.image
                                        ? `/profile/${user.image}`
                                        : '/profile/perfil-defaul.jpeg'
                                }
                                alt="Imagen Perfil usuario"
                                width={220}
                                height={220}
                                className="rounded-[50%]"
                            />
                        </div>
                    </div>
                </div>
                <DialogFooter className="mt-6">
                    <DialogClose asChild>
                        <Button className="h-[36px] w-[100px] rounded-[10px] border-0 bg-gris text-[12px] font-normal text-blanco hover:bg-grisclaro hover:text-gris 2xl:w-[100px]">
                            Cerrar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
