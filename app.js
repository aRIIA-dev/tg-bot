const express = require('express');
const { App, ExpressReceiver } = require('@slack/bolt');

const receiver = new ExpressReceiver({
	signingSecret: process.env.SLACK_SIGNING_SECRET,
});

receiver.router.use(express.static('public'));

const app = new App({
	receiver,
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// & Messages
app.message('hello', async ({ message, say }) => {
	await say(`Hey there <@${message.user}>!`);
});

app.message(':wave:', async ({ message, say }) => {
	await say(`Hi <@${message.user}>`);
});

app.message(
	/^(bgc|BGC|Business Growth Consultant|business growth consultant|Growth Consultant|growth consultant).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nBGC - Business Growth Consultant\n\nA BGC, or Business Growth Consultant, is a person who is a part of Thryv’s post-sales team dedicated to driving additional monetization opportunities with existing customers to reduce churn and increase NDR.`
		);
	}
);

app.message(
	/^(saas|SaaS|Software as a Service|software as a service).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nSaaS - Software as a Service\n\nSoftware as a service (SaaS) is a software licensing and delivery model in which software is licensed on a subscription basis and is centrally hosted. It is sometimes referred to as "on-demand software".`
		);
	}
);

app.message(
	/^(seo|SEO|search engine optimization|Search Engine Optimization).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nSEO - Search Engine Optimization\n\nSearch engine optimization (SEO) is the process of increasing the quality and quantity of website traffic by increasing the visibility of a website or a web page to users of a web search engine. SEO refers to the improvement of unpaid results (known as "natural" or "organic" results) and excludes direct traffic/visitors and the purchase of paid placement.`
		);
	}
);

app.message(
	/^(nps|NPS|Net Promoter Score|net promoter score).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nNPS - Net Promoter Score\n\nNet Promoter Score (NPS) is a customer loyalty metric that measures the willingness of customers to recommend a company's products or services to others. It is used as a proxy for gauging the customer's overall satisfaction with a company's product or service and the customer's loyalty to the brand.`
		);
	}
);

app.message(
	/^(ndr|NDR|Net Dollar Retention|net dollar retention|Net dollar retention).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nNDR - Net Dollar Retention\n\nNet dollar retention (NDR) is a metric used to measure the percentage of revenue retained from existing customers. It is calculated by dividing the total revenue from existing customers by the total revenue from all customers.`
		);
	}
);

app.message(
	/^(dse|DSE|Digital Sales Expert|digital sales expert).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nDSE - Digital Sales Expert\n\nA DSE, or Digital Sales Expert, is a person who spcializes in SEO & SEM. They support all sales departments and  determine the best digital marketing strategy for each customer.`
		);
	}
);

app.message(
	/^(ba|BA|Business Advisor|business advisor).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nBA - Business Advisor\n\nA BA, or Business Advisor, is a person who is a part of Thryv’s post-sales team dedicated to driving additional monetization opportunities with existing customers to reduce churn and increase NDR.`
		);
	}
);

app.message(
	/^(churn|Churn|Customer Churn|customer churn).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nChurn - Customer Churn\n\nCustomer churn is the rate at which customers or subscribers stop doing business with a company or service. It is a key metric for subscription-based businesses, as it is a measure of the company's ability to retain customers.`
		);
	}
);

app.message(
	/^(mrr|MRR|Monthly Recurring Revenue|monthly recurring revenue).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nMRR - Monthly Recurring Revenue\n\nMonthly recurring revenue (MRR) is a metric used to measure the amount of revenue a company generates from subscription-based products or services. It is calculated by multiplying the number of customers by the average monthly revenue per customer.`
		);
	}
);

app.message(
	/^(csm|CSM|Customer Success Manager|customer success manager).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nCSM - Customer Success Manager\n\nA role within the customer success team primarily tasked with onboarding and training new clients who purchase the Thryv platform.`
		);
	}
);

app.message(
	/^(MQL|mql|Marketing Qualified Lead|marketing qualified lead).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nMQL - Marketing Qualified Lead\n\nA lead that the marketing team has deemed more likely to become a customer compared to others. This determination is based on criteria such as which: web pages were visited, content offers were downloaded, CTAs were clicked, and social posts were interacted with.`
		);
	}
);

app.message(
	/^(mc|MC|Marketing Center|marketing center).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nMC - Marketing Center\n\nMarketing Center is a tool within Thryv to create and run advertisements online across various channels. It will scrape your current website for ad copy and images, and use this information to create a streamlined, omni-channel ad campaign with consistent branding. It will allow you to allocate your ad budget across these various channels, and provide recommendations along the way using machine learning to improve performance. Marketing Center will also track the performance of your website, and help you manage your Google My Business Listing.`
		);
	}
);

app.message(
	/^(sem|SEM|Search Engine Marketing|search engine marketing).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nSEM - Search Engine Marketing\n\nSearch engine marketing (SEM) is a form of Internet marketing that involves the promotion of websites by increasing their visibility in search engine results pages (SERPs) primarily through paid advertising.`
		);
	}
);

app.message(
	/^(digital marketing|Digital Marketing).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nDigital Marketing\n\nDigital Marketing is the marketing of products or services using digital technologies, mainly on the Internet, but also including mobile phones, display advertising, and any other digital medium.`
		);
	}
);

app.message(
	/^(arr|ARR|Annual Recurring Revenue|annual recurring revenue).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nARR - Annual Recurring Revenue\n\nAnnual recurring revenue (ARR) is a metric used to measure the amount of revenue a company generates from subscription-based products or services. It is calculated by multiplying the number of customers by the average annual revenue per customer.`
		);
	}
);

app.message(
	/^(cac|CAC|Customer Acquisition Cost|customer acquisition cost).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nCAC - Customer Acquisition Cost\n\nCustomer acquisition cost (CAC) is a metric used to measure the amount of money a company spends to acquire a new customer. It is calculated by dividing the total amount spent on customer acquisition by the number of customers acquired.`
		);
	}
);

app.message(
	/^(ndr|NDR|Net Dollar Retention|net dollar retention).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nNDR - Net Dollar Retention\n\nNet dollar retention (NDR) is a metric used to measure the amount of revenue a company retains from existing customers. It is calculated by dividing the amount of revenue retained by the amount of revenue lost.`
		);
	}
);

app.message(
	/^(ltv|LTV|Lifetime Value|lifetime value).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nLTV - Lifetime Value\n\nLifetime value (LTV) is a metric used to measure the total amount of money a customer is expected to spend on a product or service over the course of their relationship with a company. It is calculated by multiplying the average revenue per customer by the average customer lifespan.`
		);
	}
);

app.message(
	/^(cac|CAC|Customer Acquisition Cost|customer acquisition cost).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nCAC - Customer Acquisition Cost\n\nCustomer acquisition cost (CAC) is a metric used to measure the amount of money a company spends to acquire a new customer. It is calculated by dividing the total amount spent on customer acquisition by the number of customers acquired.`
		);
	}
);

app.message(
	/^(arpu|ARPU|Average Revenue Per UNIT|average revenue per unit).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nARPU - Average Revenue Per UNIT\n\nAverage revenue per unit (ARPU) is a metric used to measure the average amount of money a company generates from each customer. It is calculated by dividing the total amount of revenue by the number of customers.`
		);
	}
);

app.message(
	/^(avo|AOV|Average Order Value|average order value|aov|AVO|Average Order Value|average order value).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nAOV - Average Order Value\n\nAverage order value (AOV) is a metric used to measure the average amount of money a company generates from each order. It is calculated by dividing the total amount of revenue by the number of orders.`
		);
	}
);

app.message(
	/^(bdr|BDR|Business Development Representative|business development representative).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nBDR - Business Development Representative\n\nA business development representative (BDR) is a sales professional who is responsible for generating new business opportunities for a company. BDRs are typically responsible for prospecting, qualifying, and nurturing leads.`
		);
	}
);

app.message(
	/^(cro|CRO|Chief Revenue Officer|chief revenue officer).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nCRO - Chief Revenue Officer\n\nA chief revenue officer (CRO) is a senior executive who is responsible for overseeing a company's revenue generation. CROs are typically responsible for developing and implementing strategies to increase revenue, as well as managing the sales and marketing teams.`
		);
	}
);

app.message(
	/^(prr|PRR|Performance Ranking Report|performance ranking report).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nPRR - Performance Ranking Report\n\nA performance ranking report (PRR) is a report that ranks the performance of a company's sales team. It is typically used to identify top performers and provide feedback to underperforming sales reps.`
		);
	}
);
app.message(
	/^(serp|SERP|Serp|Search Engine Results Page|search engine results page).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nSERP - Search Engine Results Page\n\nA search engine results page (SERP) is a web page that displays the results of a search query. The results are typically listed in order of relevance to the search query.`
		);
	}
);

app.message(
	/^(pip|PIP|Performance Improvement Plan|performance improvement plan).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nPIP - Performance Improvement Plan\n\nA performance improvement plan (PIP) is a document that outlines the steps a company will take to improve the performance of an underperforming employee. It is typically used to address performance issues before they result in termination.`
		);
	}
);
app.message(
	/^(hello|hi|hey|howdy|hey there|hello there)/i,
	async ({ message, say }) => {
		await say(`Hey there <@${message.user}>!`);
	}
);

app.message(
	/^(smb|SMB|Small and Medium Business|small and medium business).*/,
	async ({ message, say }) => {
		await say(
			`Hi <@${message.user}>:\n\nSMB - Small and Medium Business\n\nA small and medium business (SMB) is a business that has fewer than 500 employees. SMBs are typically privately owned and have annual revenues of less than $50 million.`
		);
	}
);

(async () => {
	await app.start();
	console.log('⚡️ ThryvGuy is running!');
})();
