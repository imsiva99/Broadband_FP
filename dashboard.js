$(document).ready(function() {
    // Mock data
    const planDetails = {
        planName: "SuperFast Internet 100Mbps",
        dataLimit: "500GB",
        price: "$50/month"
    };

    const usageStatistics = {
        dataConsumed: "350GB",
        speed: "100Mbps"
    };

    const billingInfo = {
        currentBalance: "$0",
        paymentHistory: [
            { date: "2024-06-30", amount: "$50", status: "Paid" },
            { date: "2024-05-30", amount: "$50", status: "Paid" }
        ]
    };

    // Load plan details
    $('#plan-details').html(`
        <div class="detail-box">
            <p><strong>Plan Name:</strong> ${planDetails.planName}</p>
            <p><strong>Data Limit:</strong> ${planDetails.dataLimit}</p>
            <p><strong>Price:</strong> ${planDetails.price}</p>
        </div>
    `);

    // Load usage statistics
    $('#usage-statistics').html(`
        <div class="usage-box">
            <p><strong>Data Consumed:</strong> ${usageStatistics.dataConsumed}</p>
            <p><strong>Speed:</strong> ${usageStatistics.speed}</p>
        </div>
    `);

    // Load billing information
    let paymentHistoryHtml = billingInfo.paymentHistory.map(payment => `
        <div class="billing-box">
            <p><strong>Date:</strong> ${payment.date}</p>
            <p><strong>Amount:</strong> ${payment.amount}</p>
            <p><strong>Status:</strong> ${payment.status}</p>
        </div>
    `).join('');

    $('#billing-info').html(`
        <div class="billing-box">
            <p><strong>Current Balance:</strong> ${billingInfo.currentBalance}</p>
        </div>
        ${paymentHistoryHtml}
    `);
});
