// import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
// import { type BreadcrumbItem } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { CircleAlert } from 'lucide-react';

// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Edit Product',
//         href: '/products/edit',
//     },
// ];

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}
interface Props {
    product: Product;
}
export default function Edit({ product }: Props) {
    const { data, setData, put, processing, errors } = useForm({
        name: product.name,
        price: product.price,
        description: product.description,
    });
    const handleUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        put(route('product.update', product.id));
    };

    return (
        <AppLayout breadcrumbs={[{ title: 'Edit product', href: `/product/${product.id}/edit` }]}>
            <Head title="Update a New Product" />
            <div className="w-8/12 p-4">
                <form className="space-y-4" onSubmit={handleUpdate}>
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
                    <Button disabled={processing} type="submit">
                        Update Product
                    </Button>
                </form>
            </div>
        </AppLayout>
    );
}
