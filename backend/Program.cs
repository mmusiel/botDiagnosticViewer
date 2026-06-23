var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => {
    options.AddPolicy("AllowAll", policy => {
        policy.AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
})

var app = builder.Build();

app.UseCors("AllowAll");

app.MapGet("/api/diagnostics/bolt", () =>
{
    var myBolt = new Bolt("Titanium", 2.0, 0.8, "A9A9A9");
    return myBolt;
});

app.Run();

public record Bolt(string Material, double ShaftLength, double HeadRadius, string HexColor);