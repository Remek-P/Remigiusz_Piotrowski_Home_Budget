import React from "react";

export function OverviewDetails() {
    return (
            <section className={"overview-details"}>
                <h3 className={"overview-details__header"}>All expenses</h3>
                <ul className={"overview-details-summup"}>
                    <li>
                        <h5 className={"overview-details-summup__header"}>This month
                            <div className={"overview-details-summup__values"}>$12,536</div>
                        </h5>

                    </li>
                    <li>
                        <h5 className={"overview-details-summup__header"}>Prev. month
                            <div className={"overview-details-summup__values"}>$15,000</div>
                        </h5>
                    </li>
                    <li>
                        <h5 className={"overview-details-summup__header"}>M2M&nbsp;change
                            <div className={"overview-details-summup__values"}>+13%</div>
                        </h5>
                    </li>
                </ul>
                <ul>
                    <li className={"overview-details-expense"}>
                        <h5 className={"overview-details-expense__header"}>Today, 16 October 2022</h5>
                        <article className={"overview-details-expense__container"}>
                            <h4 className={"overview-details-expense__container__header"}>Expense 18</h4>
                            <div className={"overview-details-expense__container__value"}>$500</div>
                        </article>
                    </li>
                    <li className={"overview-details-expense"}>
                        <h5 className={"overview-details-expense__header"}>Today, 16 October 2022</h5>
                        <article className={"overview-details-expense__container"}>
                            <h4 className={"overview-details-expense__container__header"}>Expense 18</h4>
                            <div className={"overview-details-expense__container__value"}>$500</div>
                        </article>
                    </li>

                </ul>
            </section>
    )
}