using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace thamma.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("Username")]
    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Fname { get; set; } = null!;

    public string Lname { get; set; } = null!;
}