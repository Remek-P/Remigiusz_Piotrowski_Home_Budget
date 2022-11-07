import React from 'react';

export function CategoryHeader({ transaction }) {
    return (
            <h3 className={"category-main__header"}>
                {transaction}
            </h3>
    );
}