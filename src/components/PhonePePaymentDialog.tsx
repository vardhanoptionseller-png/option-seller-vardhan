import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { CreditCard, Smartphone, Building2, Check, Loader2 } from "lucide-react";

interface PhonePePaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  plan: {
    name: string;
    price: string;
    duration: string;
  };
  onPaymentSuccess: (transactionId: string) => void;
  onPaymentFailure: (error: string) => void;
}

export const PhonePePaymentDialog = ({
  isOpen,
  onClose,
  plan,
  onPaymentSuccess,
  onPaymentFailure,
}: PhonePePaymentDialogProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [formData, setFormData] = useState({
    upiId: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
    netBankingBank: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePayment = async () => {
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const transactionId = `OSV_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Simulate 95% success rate
    const isSuccess = Math.random() > 0.05;

    if (isSuccess) {
      onPaymentSuccess(transactionId);
      onClose();
    } else {
      onPaymentFailure("Payment declined by bank. Please try again.");
    }

    setIsProcessing(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Complete Payment
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Payment Summary */}
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-4 rounded-lg border border-primary/20">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{plan.name} Plan</h3>
                <p className="text-sm text-muted-foreground">{plan.duration}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{plan.price}</p>
                <p className="text-xs text-muted-foreground">Inc. GST</p>
              </div>
            </div>
          </div>

          {/* Test Mode Banner */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
            <p className="text-sm text-yellow-700 dark:text-yellow-300 font-medium">
              🧪 Test Mode: Use dummy details for testing
            </p>
          </div>

          {/* Payment Methods */}
          <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="upi" className="text-xs">
                <Smartphone className="w-4 h-4 mr-1" />
                UPI
              </TabsTrigger>
              <TabsTrigger value="card" className="text-xs">
                <CreditCard className="w-4 h-4 mr-1" />
                Card
              </TabsTrigger>
              <TabsTrigger value="netbanking" className="text-xs">
                <Building2 className="w-4 h-4 mr-1" />
                Net Banking
              </TabsTrigger>
            </TabsList>

            {/* UPI Payment */}
            <TabsContent value="upi" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="upiId">UPI ID</Label>
                <Input
                  id="upiId"
                  placeholder="yourname@paytm / 9876543210@ybl"
                  value={formData.upiId}
                  onChange={(e) => handleInputChange("upiId", e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Test UPI: success@phonepe | failure@phonepe
                </p>
              </div>

              <div className="bg-muted/50 p-3 rounded-lg space-y-2">
                <h4 className="font-semibold text-sm flex items-center">
                  <Check className="w-4 h-4 mr-2 text-green-500" />
                  Popular UPI Apps
                </h4>
                <div className="grid grid-cols-4 gap-2">
                  {["PhonePe", "GPay", "Paytm", "BHIM"].map((app) => (
                    <Button
                      key={app}
                      variant="outline"
                      size="sm"
                      className="text-xs"
                      onClick={() => handleInputChange("upiId", `test@${app.toLowerCase()}`)}
                    >
                      {app}
                    </Button>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Card Payment */}
            <TabsContent value="card" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input
                  id="cardName"
                  placeholder="Name on card"
                  value={formData.cardName}
                  onChange={(e) => handleInputChange("cardName", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cardExpiry">Expiry</Label>
                  <Input
                    id="cardExpiry"
                    placeholder="MM/YY"
                    maxLength={5}
                    value={formData.cardExpiry}
                    onChange={(e) => handleInputChange("cardExpiry", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardCvv">CVV</Label>
                  <Input
                    id="cardCvv"
                    placeholder="123"
                    maxLength={3}
                    type="password"
                    value={formData.cardCvv}
                    onChange={(e) => handleInputChange("cardCvv", e.target.value)}
                  />
                </div>
              </div>

              <p className="text-xs text-muted-foreground">
                Test Card: 4111 1111 1111 1111 | Expiry: 12/25 | CVV: 123
              </p>
            </TabsContent>

            {/* Net Banking */}
            <TabsContent value="netbanking" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="netBankingBank">Select Bank</Label>
                <select
                  id="netBankingBank"
                  className="w-full px-3 py-2 bg-background border border-input rounded-md"
                  value={formData.netBankingBank}
                  onChange={(e) => handleInputChange("netBankingBank", e.target.value)}
                >
                  <option value="">Choose your bank</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="axis">Axis Bank</option>
                  <option value="kotak">Kotak Mahindra Bank</option>
                </select>
              </div>

              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">
                  You will be redirected to your bank's secure login page to complete the payment.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="outline"
              className="flex-1"
              onClick={onClose}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              className="flex-1 bg-gradient-success"
              onClick={handlePayment}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Pay {plan.price}</>
              )}
            </Button>
          </div>

          {/* Security Info */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
            <p className="text-xs text-green-700 dark:text-green-300">
              🔒 Your payment is secured with 256-bit SSL encryption
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
