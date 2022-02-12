<script lang="ts">
	import ErrorIcon from '../icons/error.svelte';
	export let message: string;
</script>

<div data-testid="error" class="flex justify-center items-center">
	<div class="alert alert-error w-fit">
		<div class="flex-1">
			<ErrorIcon />
			<!-- svelte-ignore a11y-label-has-associated-control -->
			<label>{message}</label>
		</div>
	</div>
</div>
