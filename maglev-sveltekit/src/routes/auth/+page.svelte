<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form method="post">
	<label for="token">Token</label>
	<input type="text" name="token" id="token" placeholder="Enter your token" />
	<button>Login</button>
</form>
<p>
	Don't have a token ? <a
		href="https://railway.app/account/tokens"
		class="text-blue-500"
	>
		Generate one
	</a>
</p>
