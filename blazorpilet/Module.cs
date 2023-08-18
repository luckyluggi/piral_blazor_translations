using Microsoft.Extensions.DependencyInjection;

namespace blazorpilet
{
	public class Module
	{
		public static void Main()
		{
			// this entrypoint should remain empty
		}

		public static void ConfigureServices(IServiceCollection services)
		{
			// configure dependency injection here
			services.AddLocalization();
		}
	}
}
