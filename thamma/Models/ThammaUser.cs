using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace thamma.Models;

public class User
{
    [BsonId]
    [BsonRepresentation(BsonType.ObjectId)]
    public string? Id { get; set; }

    [BsonElement("username")]
    public string username { get; set; } = null!;

    public string password { get; set; } = null!;

    public string email { get; set; } = null!;

    public string fname { get; set; } = null!;

    public string lname { get; set; } = null!;

    public string img {get; set;} = null!;
}