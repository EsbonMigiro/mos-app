// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import { Megaphone } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];
interface PageProps {
    flash: {
        message?: string;
    };
    products: Product[];
}

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

export default function Index() {
    const { products, flash } = usePage().props as unknown as PageProps;
    const { processing, delete: destroy } = useForm();
    const handleDelete = (product: Product) => {
        if (confirm(`Do you want to delete ${product.id} - ${product.name}`)) {
            destroy(route('product.destroy', product.id));
            console.log(product.id);
        }
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products" />
            <div className="m-4">
                <Link href={route('product.create')}>
                    <Button>Create product</Button>
                </Link>
            </div>
            <div className="m-4">
                {flash.message && (
                    <div>
                        <Alert>
                            <Megaphone className="h-4 w-4" />
                            <AlertTitle className="text-green-500"> Notification</AlertTitle>
                            <AlertDescription>{flash.message}</AlertDescription>
                        </Alert>
                    </div>
                )}
            </div>
            <div className="m-4 flex w-full content-center">
                {products.length > 0 && (
                    <div>
                        <ul>
                            <li>
                                <div className="flex gap-4">
                                    <div className="text-2xl text-blue-400">Name</div>
                                    <div className="text-2xl text-green-400">Price</div>
                                    <div className="text-2xl text-gray-400">Description</div>
                                </div>
                            </li>
                            {products.map((product) => (
                                <li key={product.id}>
                                    <div className="m-2 flex gap-8 p-2">
                                        <div className="text-blue-400">{product.name}</div>
                                        <div className="text-green-400">{product.price}</div>
                                        <div className="text-gray-400">{product.description}</div>

                                        <Link href={route('product.edit', product.id)}>
                                            <Button
                                                // disabled={processing}
                                                // onClick={() => handleDelete(product)}
                                                className="bg-slate-700 hover:cursor-pointer hover:bg-slate-500"
                                            >
                                                Edit
                                            </Button>
                                        </Link>

                                        <Button
                                            disabled={processing}
                                            onClick={() => handleDelete(product)}
                                            className="bg-red-700 hover:cursor-pointer hover:bg-red-500"
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
