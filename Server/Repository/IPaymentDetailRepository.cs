using Angular8NetCore3.Server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Angular8NetCore3.Server.Repository
{
    public interface IPaymentDetailRepository
    {
        Task<List<PaymentDetail>> GetPaymentDetails();

       // Task<List<PaymentDetail>> GetPosts();

        Task<PaymentDetail> GetPaymentDetail(int? postId);

        Task<int> AddPaymentDetail(PaymentDetail post);

        Task<int> DeletePaymentDetail(int? postId);

        Task UpdatePaymentDetail(PaymentDetail post);
    }
}
