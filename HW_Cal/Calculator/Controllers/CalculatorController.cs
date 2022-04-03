using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Calculator.Models;

namespace Calculator.Controllers;

public class CalculatorController : Controller
{

    public IActionResult Index()
    {
        return View();
    }

    // [HttpPost]
    // public IActionResult GetJsonData(CalModel obj)
    // {
    //     // ViewBag.result = GetResult(obj.Data);
    //     ViewBag.result = obj.Data + "test";
    //     return View();
    // }
    
    [HttpGet]
    public JsonResult Calculate(string Data = "0")
    {
        Console.WriteLine("Data: " + Data);
        string result = GetResult(Data);
        Console.WriteLine("Calcurated: " + result);
        return Json(new {result = result});
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    public string GetResult(string str)
    {
        List<char> symbolList = new List<char>();
        char[] charSymbol = { '+', '-', '*', '/' };
        string[] st = str.Split(charSymbol);
        for (int i = 0; i < str.Length; i++)
        {
            if (str[i] == '+' || str[i] == '-' || str[i] == '*' || str[i] == '/')
            {
                symbolList.Add(str[i]);
            }
        }
        double result = Convert.ToDouble(st[0]);
        for (int i = 1; i < st.Length; i++)
        {
            double num = Convert.ToDouble(st[i]);
            int j = i - 1;
            switch (symbolList[j])
            {
                case '+':
                    result = result + num;
                    break;
                case '-':
                    result = result - num;
                    break;
                case '*':
                    result = result * num;
                    break;
                case '/':
                    result = result / num;
                    break;
                default:
                    result = 0.0;
                    break;
            }
        }
        return result.ToString();
    }
}
