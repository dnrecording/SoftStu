using thamma.Models;
using ThammaApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace ThammaApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PostController : ControllerBase
{
  private readonly PostService _postService;

  public PostController(PostService postService) =>
      _postService = postService;

    [HttpGet]
    public async Task<List<Post>> GetAll() =>
        await _postService.GetAsync();

    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<Post>> GetPost(string id)
    {
        var post = await _postService.GetAsync(id);

        if (post is null)
        {
            Console.WriteLine("NotGetAll");
            return NotFound();
        }

        Console.WriteLine(post);

        return post;
    }

    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, Post updatedPost)
    {
        var post = await _postService.GetAsync(id);

        if (post is null)
        {
            return NotFound();
        }

        updatedPost.Id = post.Id;

        await _postService.UpdateAsync(id, updatedPost);

        return NoContent();
    }

    [HttpPost]
    public async Task<IActionResult> Post(Post newPost)
    {
        await _postService.CreateAsync(newPost);

        return CreatedAtAction(nameof(GetAll), new { id = newPost.Id }, newPost);
    }

    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var post = await _postService.GetAsync(id);

        if (post is null)
        {
            return NotFound();
        }

        await _postService.RemoveAsync(id);

        return NoContent();
    }
}