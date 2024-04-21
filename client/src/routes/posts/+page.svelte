<script>
export let data;
</script>

<div>
  {#each data.posts as post}
    <p>{post.content}</p>
  {/each}
</div>
