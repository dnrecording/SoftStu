using Microsoft.Extensions.Options;
using MongoDB.Driver;
using thamma.Models;

namespace ThammaApi.Services;

public class PostService
{
    private readonly IMongoCollection<Post> _postCollection;

    public PostService(
        IOptions<ThammaDatabaseSettings> ThammaDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            ThammaDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            ThammaDatabaseSettings.Value.DatabaseName);

        _postCollection = mongoDatabase.GetCollection<Post>(
            ThammaDatabaseSettings.Value.ThammaCollectionName2);
    }

    public async Task<List<Post>> GetAsync() =>
        await _postCollection.Find(_ => true).ToListAsync();

    public async Task<Post?> GetAsync(string id) =>
        await _postCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task UpdateAsync(string id, Post updatedPost) =>
        await _postCollection.ReplaceOneAsync(x => x.Id == id, updatedPost);

    public async Task CreateAsync(Post newPost) =>
        await _postCollection.InsertOneAsync(newPost);  

    public async Task RemoveAsync(string id) =>
        await _postCollection.DeleteOneAsync(x => x.Id == id);
}