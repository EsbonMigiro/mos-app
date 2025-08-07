// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { CircleAlert } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Create New Products',
        href: '/products/create',
    },
];

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        price: '',
        description: '',
    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('product.store'));
        console.log(data);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Create a New Product" />
            <div className="w-8/12 p-4">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    {Object.keys(errors).length > 0 && (
                        <Alert>
                            <CircleAlert className="h-4 w-4" />
                            <AlertTitle className="text-red-500"> Errors</AlertTitle>
                            <AlertDescription>
                                <ul>
                                    {Object.entries(errors).map(([key, message]) => (
                                        <li key={key}>{message as string}</li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}
                    <div className="gap-1.5">
                        <Label htmlFor="product name">Name</Label>
                        <Input value={data.name} onChange={(e) => setData('name', e.target.value)} placeholder="Product Name" />
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor="product price">Price</Label>
                        <Input value={data.price} onChange={(e) => setData('price', e.target.value)} placeholder="Price" />
                    </div>
                    <div className="gap-1.5">
                        <Label htmlFor="product description">Description</Label>
                        <div className="m-2 w-full">
                            <textarea
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                className="w-full rounded-t-md border-2 p-1"
                                placeholder="description"
                            />
                        </div>
                    </div>
                    <Button disabled={processing} type="submit">Add Product</Button>
                </form>
            </div>
        </AppLayout>
    );
}
