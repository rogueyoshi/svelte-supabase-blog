<script>
	import supabase from '$lib/db';

	let email;
	let password;

	async function signUp() {
		const { user, error } = await supabase.auth.signUp({
			email,
			password
		});
	}
</script>

<input type="email" bind:value={email} placeholder="username@domain.com" />
<input type="password" bind:value={password} placeholder="password" />

<button on:click={signUp}>Submit</button>
