"use client";

import { notFound } from "next/navigation";
import { use } from "react";

export default function ReviewDetail({
    params,
}: {
    params: Promise<{
        productId: string;
        reviewId: string;
    }>;
}) {
    const { productId, reviewId } = use(params); 

    if (parseInt(reviewId) > 1000) {
        notFound();
    }

    return (
        <>
            <h1>Review {reviewId} for product {productId}</h1>
        </>
    );
}
