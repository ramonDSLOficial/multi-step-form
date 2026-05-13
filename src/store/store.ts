type BussinesPlan = {
	plan: {
		arcade: {
			monthly: string;
			yearly: string;
		};
		advanced: {
			monthly: string;
			yearly: string;
		};
		pro: {
			monthly: string;
			yearly: string;
		};
	};
	onlineService: {
		monthly: string;
		yearly: string;
	};
	extraStorage: {
		monthly: string;
		yearly: string;
	};
	customProfile: {
		monthly: string;
		yearly: string;
	};
};

export const bussinesPlan: BussinesPlan = {
	plan: {
		arcade: {
			monthly: '+$9/mo',
			yearly: '+$90/yr',
		},
		advanced: {
			monthly: '+$12/mo',
			yearly: '+$120/yr',
		},
		pro: {
			monthly: '+$15/mo',
			yearly: '+$150/yr',
		},
	},
	onlineService: {
		monthly: '+$1/mo',
		yearly: '+$10/yr',
	},
	extraStorage: {
		monthly: '+$2/mo',
		yearly: '+$20/yr',
	},
	customProfile: {
		monthly: '+$2/mo',
		yearly: '+$20/yr',
	},
};
