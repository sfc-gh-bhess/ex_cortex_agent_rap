export const demoUsers = ["James", "Mike", "Rachel", "Sarah", "Alice", "Bob"] as const;

export type DemoUser = typeof demoUsers[number];

export function isValidDemoCredential(username: string, password: string): username is DemoUser {
	if (!username || !password) return false;
	return demoUsers.includes(username as DemoUser) && password === username;
}
