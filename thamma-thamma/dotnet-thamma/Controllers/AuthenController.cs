using thamma.Models;
using ThammaApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace ThammaApi.Controllers;

public class AuthenticateController : ControllerBase
{
  private readonly UserService _userService;

  public AuthenticateController(UserService userService) =>
      _userService = userService;

  [HttpGet("{username, password}")]
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

    return NoContent();
  }
}