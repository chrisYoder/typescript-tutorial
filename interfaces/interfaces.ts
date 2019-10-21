interface ILink {
	url: string;
	id?: number;
	description?: string;
	[index: string]: any;
};


 interface IPost extends ILink {
	title: string;
	body: string;
};

interface IPerson {
	name: string;
	city: string;
	age: number;
	printDetails(): void;
	add(a: number, b: number): number;
}

// type Authenticated = boolean | number | string;

// interface IExample {
// 	authenticated: Authenticated;
// 	name: string;
// }

export { 
	ILink,
	IPost, 
	IPerson
}

