using thamma.Models;
using ThammaApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace ThammaApi.Controllers;

[ApiController]
public class UserController : ControllerBase
{
    private readonly UserService _userService;

    public UserController(UserService userService) =>
        _userService = userService;

    [Route("api/[controller]")]
    [HttpGet]
    public async Task<List<User>> Get() =>
        await _userService.GetAsync();

    [Route("api/[controller]")]
    [HttpGet("{id:length(24)}")]
    public async Task<ActionResult<User>> Get(string id)
    {
        var user = await _userService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
        }

        Console.WriteLine(user);

        return user;
    }

    [Route("api/[controller]")]
    [HttpPost]
    public async Task<IActionResult> Post(User newUser)
    {
        await _userService.CreateAsync(newUser);

        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    }

    [Route("api/[controller]")]
    [HttpPut("{id:length(24)}")]
    public async Task<IActionResult> Update(string id, User updatedUser)
    {
        var user = await _userService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
        }

        updatedUser.Id = user.Id;

        await _userService.UpdateAsync(id, updatedUser);

        return NoContent();
    }

    [Route("api/[controller]")]
    [HttpDelete("{id:length(24)}")]
    public async Task<IActionResult> Delete(string id)
    {
        var user = await _userService.GetAsync(id);

        if (user is null)
        {
            return NotFound();
        }

        await _userService.RemoveAsync(id);

        return NoContent();
    }

    [Route("api/authenticate")]
    [HttpDelete("{username, password}")]
    public async Task<ActionResult<User>> Authenticate(string username, string password)
    {
        var user = await _userService.GetUsernameAsync(username);

        if (user is null)
        {
            return NotFound();
        }

        if (password == user.password && user.status == "true")
        {
            return user;
        }

        return NotFound();
    }

    [Route("api/test")]
    [HttpPost]
    public async Task<IActionResult> Posttest(User newUser)
    {
        await _userService.CreateAsync(newUser);

        return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
    }
}