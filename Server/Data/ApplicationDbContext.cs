using Angular8NetCore3.Server.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular8NetCore3.Server.Data
{
    public class ApplicationDbContext: IdentityDbContext<ApplicationUser>    
    {

        public ApplicationDbContext()
        {
        }
             
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }

        ///public DbSet<Employee> Employees { get; set; }
    }
}
